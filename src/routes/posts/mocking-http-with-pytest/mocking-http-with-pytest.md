---
layout: post
title: "Mocking HTTP with Pytest"
excerpt_separator: <!--more-->
image: mocking-http-with-pytest.png
description: "Sometimes you need to test code that interacts with the web. This post offers some reflections on mocking time-dependant HTTP requests with Pytest."
---
Dependency management is a permanent fixture in the life of a project; implementing a service from scratch (for present purposes this means using only the standard library) can dramatically increase the initial costs.

The benefits (and challenges) induced by each new dependency are difficult to estimate a priori. In some cases, as was the case when I developed the NDBC API, the most important "dependency" is the data source itself. The NDBC API is a wrapper around the National Data Buoy Center's web service, and the data is not static. This means that the API must be able to handle the dynamic nature of the data. The tests must in turn be designed to support these dynamic properties.

In order to maintain a high level of test coverage, I needed to mock the HTTP requests that the API makes to the NDBC web service. This post offers some reflections on mocking time-dependant HTTP requests with Pytest.

### The problem

The NDBC API is designed to simplify the process of obtaining data from the NDBC. The API is built on top of the `pandas` library, which is the de facto standard for data manipulation in Python. The API is a wrapper around the NDBC web service, which provides data in the form of text files. As the NDBC's data is updated every hour, the expected response for some endpoints is a function of the current time. For simple tests, such as constructing a URL, this is not a problem. However, for more complex tests, such as retrieving data for a station over a time range, the expected response's time dependence presents a challenge.

### A brief introduction to Pytest

While not strictly required (especially given the quality of the standard library's `unittest` module), Pytest is a powerful testing framework for Python. The initial setup is minimal, test discovery is automatic, and the test runner is feature-rich. Pytest also has a rich ecosystem of plugins, including `pytest-cov`, which provides coverage reporting. The core of Pytest is the `assert` statement, which is used to verify that the expected output of a function matches the actual output. Pytest also provides a number of fixtures, which are used to set up and tear down the test environment. Fixtures can be used to create a clean slate for each test, or to provide common functionality across multiple tests.

#### Fixtures

While the power of the `assert` statement to quickly and succinctly communicate the expected behavior of a function is common in both `pytest` and `unittest`, `pytest` fixtures are somewhat unique.

Fixtures are functions that are run before each test function, and can be used to set up the test environment. Fixtures can be used to create a clean slate for each test, or to provide common functionality across multiple tests. Fixtures can also be used to provide data to the test function, or to set up a mock object for the test function to use. They are a powerful and composable way to manage the test environment without duplicating code.

```python3
import pytest

@pytest.fixture
def api():
    return NdbcApi()
```

With this fixture, the `api` object is created before each test function is run. This allows the test function to use the `api` object without having to create it itself.

```python3
@pytest.fixture
def expensive_data():
    data = get_expensive_data()
    yield data
```

In this case, the `expensive_data` fixture is used to create a large data object before each test function is run. The `yield` statement is used to return the data object to the test function, without the need to recompute it.

When designing tests for an API which must read, parse, and transform data from a web service, fixtures are particularly useful. Wrapping input and output data in fixtures allows for easy testing of the API's core functionality, and for the creation of complex test cases that exercise the API's edge cases.

### Mocking HTTP requests

I experimented with a number of different approaches to mocking the HTTP requests made by the NDBC API. I settled on `httpretty` primarily for its simplicity and ease of use. In my cases, I was less concerned with testing and tracing behaviour in cases where the API was unable to connect to the NDBC web service, and more concerned with testing the API's ability to parse and transform the data it received. `httpretty` made it easy to build mock responses from human-readable yaml files. This made it easy both to design and build the tests, especially given the fact that the source data is stored as text files.

#### Time-dependent responses

The clearest examples of a time-dependent request and response in the context of the NDBC API are the station `realtime` data endpoints. The request for the realtime data is a relatively simple `GET` request to the NDBC web service, with the station identifier as a parameter. However, when executing a `get_data` call through the NDBC API, the request URLs are constructed to cover the past 30 days of real-time data as a function of the current time.

Handling this behavior in the tests required a little longer than it should have, as the solution was relatively simple. Rather than interdicting the requests in the test, I decided to use `monkeypatch` to override the `datetime` module's `datetime.now` method. This allowed me to set the current time to a fixed value for the duration of the test.

A simple example of this is shown below; more complex examples can be found in the NDBC API's [test suite](https://github.com/CDJellen/ndbc-api/tree/main/tests)

```python3
from datetime import datetime

import pytest

from ndbc_api import NdbcApi


@pytest.fixture
def api():
    return NdbcApi()

def test_get_data(api, monkeypatch):
    def mock_datetime_now():
        return datetime(2020, 11, 1, 0, 0, 0)

    monkeypatch.setattr('datetime.datetime.now', mock_datetime_now)

    data = api.get_data('tplm2', start='2020-11-01', end='2020-12-01')
    assert data.shape == (8760, 10)

    data = api.get_data('tplm2')
    assert data.shape == (8760, 10)
```

In this case, unit tests for the underlying methods of the API, especially those that construct the request URLs and process responses, are still necessary. These unit tests can be run without mocking the HTTP requests, as they are not time-dependent. For my purposes, the requirement to exceed 96% test coverage was somewhat artificial. After implementing unit tests, my coverage was around 90%, and I was able to achieve the desired coverage by writing tests for the time-dependent behavior.

In other cases outside the scope of the NDBC API, where the time-dependence of the request and response is more complex, it may be necessary to mock the HTTP requests themselves. Even in these cases, the combination of `monkeypatch`, `httpretty`, and `pytest` provides an excellent balance of power and simplicity.

### Some final remarks on mocking HTTP with Pytest

Perhaps the most important lesson I learned from this exercise was the importance of designing the API with testing in mind. The API was designed to be modular, with each method handling a specific task. This made it easy to test each method in isolation, and to build complex test cases that exercised the API's edge cases. The use of fixtures and monkeypatching made it easy to set up the test environment, and to test the API's behavior in a controlled way.

A secondary, possibly equally-important, lesson was the value of self-imposed constraints. The requirement to exceed 96% test coverage forced me to write tests for the time-dependent behavior of the API, which I might not have otherwise done. This in turn forced me to think more deeply about the behavior of the API, and to design the tests in a way that would exercise the API's edge cases.

I did not appreciate the value of these constraints until I had to address my first GitHub issue for the API. As I was a few weeks removed from the initial development, the test structure and coverage made it easy to hop back in and implement a net-new feature without worrying about breaking existing functionality. This was a powerful realization, and one that I will carry forward into future projects.
