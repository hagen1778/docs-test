---
sort: 1
---

# Single version

[![Latest Release](https://img.shields.io/github/release/VictoriaMetrics/VictoriaMetrics.svg?style=flat-square)](https://github.com/VictoriaMetrics/VictoriaMetrics/releases/latest)
[![Docker Pulls](https://img.shields.io/docker/pulls/victoriametrics/victoria-metrics.svg?maxAge=604800)](https://hub.docker.com/r/victoriametrics/victoria-metrics)
[![Slack](https://img.shields.io/badge/join%20slack-%23victoriametrics-brightgreen.svg)](http://slack.victoriametrics.com/)
[![GitHub license](https://img.shields.io/github/license/VictoriaMetrics/VictoriaMetrics.svg)](https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/LICENSE)
[![Go Report](https://goreportcard.com/badge/github.com/VictoriaMetrics/VictoriaMetrics)](https://goreportcard.com/report/github.com/VictoriaMetrics/VictoriaMetrics)
[![Build Status](https://github.com/VictoriaMetrics/VictoriaMetrics/workflows/main/badge.svg)](https://github.com/VictoriaMetrics/VictoriaMetrics/actions)
[![codecov](https://codecov.io/gh/VictoriaMetrics/VictoriaMetrics/branch/master/graph/badge.svg)](https://codecov.io/gh/VictoriaMetrics/VictoriaMetrics)

<img alt="Victoria Metrics" src="logo.png" width="100px">

VictoriaMetrics is a fast, cost-effective and scalable monitoring solution and time series database.

It is available in [binary releases](https://github.com/VictoriaMetrics/VictoriaMetrics/releases),
[docker images](https://hub.docker.com/r/victoriametrics/victoria-metrics/), [Snap package](https://snapcraft.io/victoriametrics)
and in [source code](https://github.com/VictoriaMetrics/VictoriaMetrics). Just download VictoriaMetrics and see [how to start it](#how-to-start-victoriametrics).
If you use Ubuntu, then just run `snap install victoriametrics` in order to install and run it.
Then read [Prometheus setup](#prometheus-setup) and [Grafana setup](#grafana-setup) docs.

Cluster version is available [here](https://github.com/VictoriaMetrics/VictoriaMetrics/tree/cluster).

See additional docs at our [Wiki](https://github.com/VictoriaMetrics/VictoriaMetrics/wiki).

[Contact us](mailto:info@victoriametrics.com) if you need paid enterprise support for VictoriaMetrics.
See [features available for enterprise customers](https://victoriametrics.com/enterprise.html).


## Case studies and talks

Alphabetically sorted links to case studies:

* [adidas](https://victoriametrics.github.io/CaseStudies.html#adidas)
* [Adsterra](https://victoriametrics.github.io/CaseStudies.html#adsterra)
* [ARNES](https://victoriametrics.github.io/CaseStudies.html#arnes)
* [Brandwatch](https://victoriametrics.github.io/CaseStudies.html#brandwatch)
* [CERN](https://victoriametrics.github.io/CaseStudies.html#cern)
* [COLOPL](https://victoriametrics.github.io/CaseStudies.html#colopl)
* [Dreamteam](https://victoriametrics.github.io/CaseStudies.html#dreamteam)
* [Idealo.de](https://victoriametrics.github.io/CaseStudies.html#idealode)
* [MHI Vestas Offshore Wind](https://victoriametrics.github.io/CaseStudies.html#mhi-vestas-offshore-wind)
* [Synthesio](https://victoriametrics.github.io/CaseStudies.html#synthesio)
* [Wedos.com](https://victoriametrics.github.io/CaseStudies.html#wedoscom)
* [Wix.com](https://victoriametrics.github.io/CaseStudies.html#wixcom)
* [Zerodha](https://victoriametrics.github.io/CaseStudies.html#zerodha)
* [zhihu](https://victoriametrics.github.io/CaseStudies.html#zhihu)


## Prominent features

* VictoriaMetrics can be used as long-term storage for Prometheus or for [vmagent](https://victoriametrics.github.io/vmagent.html).
  See [these docs](#prometheus-setup) for details.
* VictoriaMetrics supports [Prometheus querying API](https://prometheus.io/docs/prometheus/latest/querying/api/), so it can be used as Prometheus drop-in replacement in Grafana.
* VictoriaMetrics implements [MetricsQL](https://victoriametrics.github.io/MetricsQL.html) query language backwards compatible with PromQL.
* VictoriaMetrics provides global query view. Multiple Prometheus instances or any other data sources may ingest data into VictoriaMetrics.
  Later this data may be queried via a single query.
* High performance and good scalability for both [inserts](https://medium.com/@valyala/high-cardinality-tsdb-benchmarks-victoriametrics-vs-timescaledb-vs-influxdb-13e6ee64dd6b)
  and [selects](https://medium.com/@valyala/when-size-matters-benchmarking-victoriametrics-vs-timescale-and-influxdb-6035811952d4).
  [Outperforms InfluxDB and TimescaleDB by up to 20x](https://medium.com/@valyala/measuring-vertical-scalability-for-time-series-databases-in-google-cloud-92550d78d8ae).
* [Uses 10x less RAM than InfluxDB](https://medium.com/@valyala/insert-benchmarks-with-inch-influxdb-vs-victoriametrics-e31a41ae2893)
  and [up to 7x less RAM than Prometheus, Thanos or Cortex](https://valyala.medium.com/prometheus-vs-victoriametrics-benchmark-on-node-exporter-metrics-4ca29c75590f)
  when dealing with millions of unique time series (aka high cardinality).
* Optimized for time series with high churn rate. Think about [prometheus-operator](https://github.com/coreos/prometheus-operator) metrics from frequent deployments in Kubernetes.
* High data compression, so [up to 70x more data points](https://medium.com/@valyala/when-size-matters-benchmarking-victoriametrics-vs-timescale-and-influxdb-6035811952d4)
  may be crammed into limited storage comparing to TimescaleDB
  and [up to 7x less storage space is required comparing to Prometheus, Thanos or Cortex](https://valyala.medium.com/prometheus-vs-victoriametrics-benchmark-on-node-exporter-metrics-4ca29c75590f).
* Optimized for storage with high-latency IO and low IOPS (HDD and network storage in AWS, Google Cloud, Microsoft Azure, etc).
  See [graphs from these benchmarks](https://medium.com/@valyala/high-cardinality-tsdb-benchmarks-victoriametrics-vs-timescaledb-vs-influxdb-13e6ee64dd6b).
* A single-node VictoriaMetrics may substitute moderately sized clusters built with competing solutions such as Thanos, M3DB, Cortex, InfluxDB or TimescaleDB.
  See [vertical scalability benchmarks](https://medium.com/@valyala/measuring-vertical-scalability-for-time-series-databases-in-google-cloud-92550d78d8ae),
  [comparing Thanos to VictoriaMetrics cluster](https://medium.com/@valyala/comparing-thanos-to-victoriametrics-cluster-b193bea1683)
  and [Remote Write Storage Wars](https://promcon.io/2019-munich/talks/remote-write-storage-wars/) talk
  from [PromCon 2019](https://promcon.io/2019-munich/talks/remote-write-storage-wars/).
* Easy operation:
  * VictoriaMetrics consists of a single [small executable](https://medium.com/@valyala/stripping-dependency-bloat-in-victoriametrics-docker-image-983fb5912b0d) without external dependencies.
  * All the configuration is done via explicit command-line flags with reasonable defaults.
  * All the data is stored in a single directory pointed by `-storageDataPath` command-line flag.
  * Easy and fast backups from [instant snapshots](https://medium.com/@valyala/how-victoriametrics-makes-instant-snapshots-for-multi-terabyte-time-series-data-e1f3fb0e0282)
  to S3 or GCS with [vmbackup](https://victoriametrics.github.io/vmbackup.html) / [vmrestore](https://victoriametrics.github.io/vmrestore.html).
  See [this article](https://medium.com/@valyala/speeding-up-backups-for-big-time-series-databases-533c1a927883) for more details.
* Storage is protected from corruption on unclean shutdown (i.e. OOM, hardware reset or `kill -9`) thanks to [the storage architecture](https://medium.com/@valyala/how-victoriametrics-makes-instant-snapshots-for-multi-terabyte-time-series-data-e1f3fb0e0282).
* Supports metrics' scraping, ingestion and [backfilling](#backfilling) via the following protocols:
  * [Metrics from Prometheus exporters](https://github.com/prometheus/docs/blob/master/content/docs/instrumenting/exposition_formats.md#text-based-format)
  such as [node_exporter](https://github.com/prometheus/node_exporter). See [these docs](#how-to-scrape-prometheus-exporters-such-as-node-exporter) for details.
  * [Prometheus remote write API](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write)
  * [InfluxDB line protocol](#how-to-send-data-from-influxdb-compatible-agents-such-as-telegraf) over HTTP, TCP and UDP.
  * [Graphite plaintext protocol](#how-to-send-data-from-graphite-compatible-agents-such-as-statsd) with [tags](https://graphite.readthedocs.io/en/latest/tags.html#carbon)
    if `-graphiteListenAddr` is set.
  * [OpenTSDB put message](#sending-data-via-telnet-put-protocol) if `-opentsdbListenAddr` is set.
  * [HTTP OpenTSDB /api/put requests](#sending-opentsdb-data-via-http-apiput-requests) if `-opentsdbHTTPListenAddr` is set.
  * [JSON line format](#how-to-import-data-in-json-line-format).
  * [Native binary format](#how-to-import-data-in-native-format).
  * [Prometheus exposition format](#how-to-import-data-in-prometheus-exposition-format).
  * [Arbitrary CSV data](#how-to-import-csv-data).
* Supports metrics' relabeling. See [these docs](#relabeling) for details.
* Ideally works with big amounts of time series data from Kubernetes, IoT sensors, connected cars, industrial telemetry, financial data and various Enterprise workloads.
* Has open source [cluster version](https://github.com/VictoriaMetrics/VictoriaMetrics/tree/cluster).
* See also technical [Articles about VictoriaMetrics](https://victoriametrics.github.io/Articles.html).
