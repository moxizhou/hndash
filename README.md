# Hacker News Dashboard

> The Hacker News Dashboard is a full-stack web application which utilizes the Hacker News API to provide a dashboard for data analysis and visualization.

## Status
[![Build Status](https://travis-ci.org/jetgrizzly/hndash.svg)](https://travis-ci.org/jetgrizzly/hndash)

## Team 1

  - __Product Owner__: Will Burgo
  - __Scrum Master__: Adam Back 
  - __Development Team Members__: Oleg Yanchinskiy, Justin Pinili

## Team 2

- __Product Owner__: Moxi Zhou
- __Scrum Master__: Jeff Gladchun
- __Development Team Members__: Alex Jeng, Jose Merino

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Built off of Scheming-Lion, jetgrizzly uses the application to further enhance data visualization, aggregation, and real-time integration. 

## Our tech stack

> Our project uses Angular, Node, a MySql Database for the backend, and the Sequelize ORM.

## Navigating the file structure

* Client - all client facing code. Contains our primary features - Track Posts, track users, see user's top stories, word frequency visualizations.
* Server - contains (1) a set of query helper functions for easily using the Database (2) a database folder, which contains our code for inserting new data into our database, and (3) a generic server setup for local development (which you most likely will not use now that we have fully populated the database and have it deployed using Azure)
* Testing - We have some basic testing built out for the front-end code. The backend code is not rigorously tested because that would require read/write access to HN's own database, but we have tested this informally and have confirmed that all datapoints exist.

## Requirements

- Node 0.10.32
- Express ~4.9.0
- MySQL ?
- Angular ~1.2.18
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
