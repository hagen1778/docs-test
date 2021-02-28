---
sort: 3
---

## VMagent

`vmagent` is a tiny but brave agent, which helps you collect metrics from various sources
and stores them in [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics)
or any other Prometheus-compatible storage system that supports the `remote_write` protocol.

<img alt="vmagent" src="vmagent.png">


## Motivation

While VictoriaMetrics provides an efficient solution to store and observe metrics, our users needed something fast
and RAM friendly to scrape metrics from Prometheus-compatible exporters to VictoriaMetrics.
Also, we found that users’ infrastructure are snowflakes - no two are alike, and we decided to add more flexibility
to `vmagent` (like the ability to push metrics instead of pulling them). We did our best and plan to do even more.


## Features

* Can be used as drop-in replacement for Prometheus for scraping targets such as [node_exporter](https://github.com/prometheus/node_exporter).
  See [Quick Start](#quick-start) for details.
* Can add, remove and modify labels (aka tags) via Prometheus relabeling. Can filter data before sending it to remote storage. See [these docs](#relabeling) for details.
* Accepts data via all the ingestion protocols supported by VictoriaMetrics:
  * Influx line protocol via `http://<vmagent>:8429/write`. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-send-data-from-influxdb-compatible-agents-such-as-telegraf).
  * Graphite plaintext protocol if `-graphiteListenAddr` command-line flag is set. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-send-data-from-graphite-compatible-agents-such-as-statsd).
  * OpenTSDB telnet and http protocols if `-opentsdbListenAddr` command-line flag is set. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-send-data-from-opentsdb-compatible-agents).
  * Prometheus remote write protocol via `http://<vmagent>:8429/api/v1/write`.
  * JSON lines import protocol via `http://<vmagent>:8429/api/v1/import`. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-import-data-in-json-line-format).
  * Native data import protocol via `http://<vmagent>:8429/api/v1/import/native`. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-import-data-in-native-format).
  * Data in Prometheus exposition format. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-import-data-in-prometheus-exposition-format) for details.
  * Arbitrary CSV data via `http://<vmagent>:8429/api/v1/import/csv`. See [these docs](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-import-csv-data).
* Can replicate collected metrics simultaneously to multiple remote storage systems.
* Works in environments with unstable connections to remote storage. If the remote storage is unavailable, the collected metrics
  are buffered at `-remoteWrite.tmpDataPath`. The buffered metrics are sent to remote storage as soon as connection
  to remote storage is recovered. The maximum disk usage for the buffer can be limited with `-remoteWrite.maxDiskUsagePerURL`.
* Uses lower amounts of RAM, CPU, disk IO and network bandwidth compared to Prometheus.
