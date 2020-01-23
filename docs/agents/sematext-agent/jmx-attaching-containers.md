title: Automatic attaching to Java processes in container environments
description: Sematext Agent can automatically attach to Java processes such as Solr, Kafka, and Zookeeper, and expose the JMX port required for monitoring from within the service itself.

When you assign a `MONITORING_TOKEN` to a Java service, via an environment variable, Sematext Agent will examine the process to see whether it can be
monitored right away by checking if JMX ports are already exposed. If it can, Sematext Agent will start monitoring it. However, if it can't, Sematext Agent
will try to inject a special and secure agent into the monitored process, which has the sole purpose of opening a JMX port. A JMX port opened in such a way is
protected by authentication based on a temporary username and password known only to Sematext Agent.

If JMX port is already open, but is protected with some authentication mechanism, Sematext Agent will try to open another JMX port anyway (it can't connect to the service on exposed port since it doesn't have authentication credentials).

There are cases where automatic attaching may not be desirable:

- if you wish to use a different kind of authentication, maybe with with truststore, on an exposed JMX port
- if Sematext Agent attaching logic is failing for some reason (you would notice that by missing metrics and errors in agent logs)


### How to disable or configure custom jmx authentication settings?

If you don't want the service monitored at all just remove `MONITORING_TOKEN` env variable from its container. If you want it to be monitored, but using your
own JMX authentication definition (either existing one or the one you will define just for this), [define container jmx settings manually](../../monitoring/manually-setting-jmx-containers).
