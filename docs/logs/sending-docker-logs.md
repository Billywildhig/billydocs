title: Sending Docker Logs with Logagent
description: Collect and ship container logs with Logagent

[Logagent](https://sematext.com/logagent/) is a general purpose open-source log shipper. The [Logagent Docker image](https://hub.docker.com/_/logagent) is pre-configured for [log collection on container platforms](https://sematext.com/blog/docker-container-monitoring-with-sematext/#toc-container-logs-0). It runs as a tiny container on every Docker host and collects logs for all cluster nodes and their containers. Logagent enriches container logs with container metadata such as Kubernetes, Docker Enterprise, and Docker Swarm.

Logagent deployment is very simple. See [all configurations options](https://sematext.com/docs/logagent/installation-docker/#configuration-parameters). 

Logagent recognizes log formats from various applications / official images out of the box. The [patterns.yml](https://github.com/sematext/logagent-js/blob/master/patterns.yml) file for [log parser patterns](https://sematext.com/docs/logagent/parser/) contains regular expressions to match container name or images, regular expressions to extract fields, field names and optional JavaScript functions to enrich or manipulate the parsed log event. 

The following short example shows how easy it is to deploy Logagent, run a web server, and get structured web server logs for web analytics in Sematext. Logagent ships parsed web server logs via the Elasticsearch API to Sematext Cloud. 

```sh

# Start Logagent
docker run -d --restart=always -e LOGS_TOKEN=<YOUR_LOGS_APP_TOKEN_HERE> \
-v /var/run/docker.sock:/var/run/docker.sock \
sematext/logagent
# Start Nginx web server
docker run -d -p 8081:80 nginx
# Access the web server
curl http://127.0.0.1:8081

```

A few seconds later, Nginx logs will be displayed in Sematext: beautiful, structured web server logs, including container metadata.

*One second! How does Logagent know  the container log format?*

A log pattern for web server logs with *nginx* as the `sourceName` (e.g. the image or container name) is defined in the default patterns.yml file. 
As long as the web server container contains "nginx" or "httpd" in its name (or image) the parser for web server logs will be applied. If your image or containers don't contain the defined `sourceName` from the default patterns.yml file, you can provide [your own patterns.yml file](https://sematext.com/docs/logagent/parser/#example) to sematext/logagent: 

```
docker run -d --restart=always -e LOGS_TOKEN=<YOUR_LOGS_APP_TOKEN_HERE> \
-v /var/run/docker.sock:/var/run/docker.sock \
-v $(pwd)/mypatterns.yml:/etc/sematext/logagent/patterns.yml
sematext/logagent
```


![Structured web server logs with container metadata](https://sematext.com/wp-content/uploads/2019/04/Screen-Shot-2019-03-12-at-14.35.26.png)

_Structured web server logs with container metadata_

With just a few clicks we can add widgets to create a web server logs dashboard, showing Top IP addresses and Top URLs or containers.

![Sematext UI with Top N widgets for various log fields](https://sematext.com/wp-content/uploads/2019/04/Screen-Shot-2019-03-12-at-14.43.56.png)

_Sematext UI with Top N widgets for various log fields_

 That was a smooth start. To see all configuration options and instructions for Kubernetes, Red Hat Enterprise, IBM Cloud, check the [Logagent configuration options](https://sematext.com/docs/logagent/installation-docker/#configuration-parameters). 
