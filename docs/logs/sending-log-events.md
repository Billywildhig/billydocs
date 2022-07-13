title: Sending Log Events
description: Send new events to Sematext logging management app using Elasticsearch API or syslog, and log shippers such as logstash, logagent, fluentd, rsyslog, syslog-ng, apache flume and more

To send new events to Logs Management app, you have two ways to
connect - using Elasticsearch API or using syslog.

  - HTTP / HTTPS (ports 80 / 443), by using the Elasticsearch API on
    **logsene-receiver.sematext.com** / **logsene-receiver.eu.sematext.com**
  - UDP / TCP / RELP / TLS, by using the syslog receiver on
    **logsene-syslog-receiver.sematext.com** / **logsene-syslog-receiver.eu.sematext.com**
  - UDP / TCP by using the socket receiver for JSON on 
    **logsene-syslog-receiver.sematext.com** / **logsene-syslog-receiver.eu.sematext.com**

All options work with log shippers such as
[Logstash](logstash),
[Logagent](/logagent),
[Fluentd](https://github.com/uken/fluent-plugin-elasticsearch),
[Fluent Bit](fluentbit),
[rsyslog](rsyslog) or
[syslog-ng](syslog-ng). And you can always write your own
application or script that works with
[Elasticsearch](index-events-via-elasticsearch-api) or
syslog or Apache Flume or really any other tool that can send data to
[Sematext's Elasticsearch API](index-events-via-elasticsearch-api).
