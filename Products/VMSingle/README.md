---
sort: 2
---

# Cluster version

<img alt="Victoria Metrics" src="logo.png">

VictoriaMetrics is a fast, cost-effective and scalable time series database. It can be used as a long-term remote storage for Prometheus.

It is recommended using [single-node version](https://github.com/VictoriaMetrics/VictoriaMetrics) instead of cluster version
for ingestion rates lower than a million of data points per second.
Single-node version [scales perfectly](https://medium.com/@valyala/measuring-vertical-scalability-for-time-series-databases-in-google-cloud-92550d78d8ae)
with the number of CPU cores, RAM and available storage space.
Single-node version is easier to configure and operate comparing to cluster version, so think twice before sticking to cluster version.

Join [our Slack](http://slack.victoriametrics.com/) or [contact us](mailto:info@victoriametrics.com) with consulting and support questions.


## Prominent features

- Supports all the features of [single-node version](https://github.com/VictoriaMetrics/VictoriaMetrics).
- Performance and capacity scales horizontally. See [these docs for details](#cluster-resizing-and-scalability).
- Supports multiple independent namespaces for time series data (aka multi-tenancy). See [these docs for details](#multitenancy).
- Supports replication. See [these docs for details](#replication-and-data-safety).