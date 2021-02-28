---
sort: 5
---

# VMauth

`vmauth` is a simple auth proxy and router for [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics).
It reads username and password from [Basic Auth headers](https://en.wikipedia.org/wiki/Basic_access_authentication),
matches them against configs pointed by `-auth.config` command-line flag and proxies incoming HTTP requests to the configured per-user `url_prefix` on successful match.
