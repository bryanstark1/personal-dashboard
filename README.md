# Personal Dashboard

This is a dashboard runs on a Raspberry Pi touch screen. It utilizes various APIs to display information such as weather, train times, music playing and more - with the ability to localize much of this data for personal use on a daily basis.


## Express Server
- In case I need to:
  - Store/log data for APIs
  - Handle client-related CORS issues
  - Merge/compute data before returning to client
  - Hide API keys


## Widget Ideas
- Clock
- Calendar
- Weather
- Train Times
- Sonos Music
  - https://docs.sonos.com/docs/javascript-sample-app
  - https://developer.sonos.com (Official, requires OAuth & Dev Account)
    - Only way to access Apple Music libraries
  - https://jishi.github.io/node-sonos-http-api/ (Unoffical, local API)
- News
