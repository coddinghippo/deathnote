# DEATHNOTE.GG

DEATHNOTE.GG is a service that tracks villain gamers from League of Legends.

Some villains sabotage his/her team and the other players loses their precious time and opportunity.
Teammates are really important in LOL, yet You know almost nothing about your teammates.

This service helps you to findout your teammates' reputation easily, so you can screen villains before you get harm from them.

## Introduction

This repository uses Lerna to manage both front-end and back-end.

## Prerequisites

| Dependency | Version |
| ---------- | ------- |
| Lerna      | ^3.16.4 |
| TypeScript | 0       |
| Node       | 0       |
| React      | 0       |

Both front-end and back-end uses TypeScript.

## Installation

Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies.

```shell

lerna bootstrap
```

## Run

Run an npm script in each package that contains that script.

Ensure to add `.env` file in `packages/client` for store React Environment Variable.

If you don't have any API key, just go to [https://developer.riotgames.com/](https://developer.riotgames.com/) to get a new API key.

Add `REACT_APP_API_KEY=[your-api-key]` to `.env`.
Replace `[your-api-key]` with your real API Key.

```shell

lerna run start
```

You may encounter CORS error, this is because of Same Origin Policy of the browser.
You have to add a "product" in [https://developer.riotgames.com/](https://developer.riotgames.com/) in order to resolve CORS.
