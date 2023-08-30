![GitHub repo size](https://img.shields.io/github/repo-size/askbuddie/bikram-sambat?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/askbuddie/bikram-sambat?color=orange&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/askbuddie/bikram-sambat?color=success&style=flat-square)
![GitHub license](https://img.shields.io/badge/license-GPL%20%2B%20CE-FFFF00?style=flat-square)
[![GitHub Stars](https://img.shields.io/github/stars/askbuddie/bikram-sambat?label=GitHub%20stars&style=social)](https://github.com/askbuddie/bikram-sambat/stargazers/)

## Introduction

The `BikramSambat` library is designed to simplify date manipulation within the Bikram Sambat (Nepali) calendar system. This documentation provides a brief overview of key features and usage examples for the class, intended to facilitate its integration into your projects.

## Installation

To use `bikram-sambat` library in your project, install it using `npm` or `yarn`:

```bash
npm i @askbuddie/bikram-sambat
```

```bash
yarn add @askbuddie/bikram-sambat
```

## Getting Started

Here's a quick guide to get started with the `BikramSambat` class:

### Import the Class

```javascript
import { BikramSambat } from '@askbuddie/bikram-sambat';
```

### Initialize a Date

You can create a `BikramSambat` instance using different initialization methods:

```javascript
const date1 = new BikramSambat('2080-05-15'); // Initialize with a date string
const date2 = new BikramSambat(); // Initialize with the current date
```

## Manipulating Dates

### Get Components

Retrieve individual date components:

```javascript
const year = date1.getYear(); // 2080
const month = date1.getMonth(); // 5
const day = date1.getDay(); // 15
```

### Set Components

Update date components:

```javascript
date1.setYear(2079);
date1.setMonth(6);
date1.setDay(20);
```

### Formatting

Format dates as strings:

```javascript
const formattedDate = date1.format('YYYY-MM-DD'); // "2080-05-15"
const dateString = date1.toString(); // "2080-05-15"
```

## Navigation and Comparison

Navigate through dates and perform comparisons:

```javascript
const prevYear = date1.getPreviousYear(); // 2079
const nextYear = date1.getNextYear(); // 2081

const isSameMonth = date1.isSameMonth(date2); // true
const isAfter = date1.isAfter(date2); // true
```

## Conversion and Retrieval

Convert dates between the Bikram Sambat and Gregorian calendars:

```javascript
const gregorianDate = date1.toGregorian(); // JavaScript Date object
const bsDate = BikramSambat.fromAD(gregorianDate);
```

Retrieve relative dates:

```javascript
const prevDay = date1.getPreviousDay();
const weekStart = date1.getWeekStartDate(); 
```

## Full Documentation

For a complete list of methods and their usage, please refer to the [API Documentation]()
