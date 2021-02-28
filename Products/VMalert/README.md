---
sort: 1
---

# VMalert

`vmalert` executes a list of given [alerting](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)
or [recording](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/)
rules against configured address.

## Features:
* Integration with [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) TSDB;
* VictoriaMetrics [MetricsQL](https://victoriametrics.github.io/MetricsQL.html)
 support and expressions validation;
* Prometheus [alerting rules definition format](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/#defining-alerting-rules)
 support;
* Integration with [Alertmanager](https://github.com/prometheus/alertmanager);
* Keeps the alerts [state on restarts](https://github.com/VictoriaMetrics/VictoriaMetrics/tree/master/app/vmalert#alerts-state-on-restarts);
* Graphite datasource can be used for alerting and recording rules. See [these docs](#graphite) for details.
* Lightweight without extra dependencies.

## Limitations:
* `vmalert` execute queries against remote datasource which has reliability risks because of network. 
It is recommended to configure alerts thresholds and rules expressions with understanding that network request
may fail;
* by default, rules execution is sequential within one group, but persisting of execution results to remote
storage is asynchronous. Hence, user shouldn't rely on recording rules chaining when result of previous
recording rule is reused in next one;
* `vmalert` has no UI, just an API for getting groups and rules statuses.