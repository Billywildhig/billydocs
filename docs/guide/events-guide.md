title: Sematext Events User Guide
description: Sematext Cloud Events provide a flexible centralized dashboard that lets you see and manage Events across your whole stack. Use Events to correlate Alerts with Metrics and/or Logs, and gain proper insight into your whole infrastructure.

Sematext lets you visualize performance, metrics, logs, and **events**. They represent what's happening with a server or cluster, with an application, a Docker container, and much more.

What are Events? Why do you need them and how do you use them?

Think about when something happens in your infrastructure.

- An **application starts/stops**
- or **server restarts**, 
- **CI/CD builds** finish running, 
- **deployments** succeed, 
- **alerts** send out **notifications**, etc

These are all Events!

**Events are graphed in time-series charts** and these charts can be shown next to Metrics or Logs charts. 

## Events Correlations

You can **correlate Events** with metrics, logs, experience or synthetics data using **[split screen](./split-screen/)**. It enables you to see how certain events affected metrics or to see if there were some event when some spike happened.  

You can also **correlate Events with Logs** for full observability. This means you can have **Events, Logs, and Metrics on the same timeline**, saving you huge amounts of time when debugging.

![Sematext Cloud Events and Metrics and Logs Correlation](../images/guide/split-screen/monitoring-events.png "Sematext Cloud Events and Metrics Correlation")

## Events Components

There are **two main components** that make up **Events**. Both can be added to dashboards just as Metrics and Logs components.

You can create Events and attach them to any particular Monitoring, Logs, or Experience App, or dashboard. It's great for leaving notes alongside auto-generated data. It supports markdown format and provides a perfect way to provide human input which can later be used for presentations and reminders. 

### Events Histogram

The **Events Histogram** is a timeline of Events time-series data. It can easily be **filtered using the time-picker** component shortcuts, as well as zoom and shift chart tools.

![Sematext Cloud Events Histogram Component](https://sematext.com/docs/images/guide/alerts-and-events/add-events-component-time-series.png "Sematext Cloud Events Histogram Component")

### Events Stream

The **Event Stream component** is a **list view of all Events** that occurred across your infrastructure. It centralizes all of them in a single table, and is a **unified way to filter and pinpoint issues** across different parts of your infrastructure. 

![Sematext Cloud Events Stream Component](https://sematext.com/docs/images/guide/alerts-and-events/event-stream-component.png "Sematext Cloud Events Stream Component")

Apart from what you see here, you can **send** your own **custom events** to the Sematext Events Stream. Our Events feature is **exposed via a [REST API](../events/#adding-events)** that lets you post, retrieve, and search your events. This REST API matches the Elasticsearch API, so you can use any Elasticsearch tool or client to post, get, and search for events.
