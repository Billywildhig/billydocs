title: Logagent input plugin for MQTT Broker 
description: Logagent features modular logging architecture framework where each input or output module is implemented as a plugin, and loaded on demand as declared in the configuration file. MQTT Broker input plugin starts a MQTT Broker and emits each received message (all topics) to Logagent processing pipeline. Receive messages via MQTT broker, and use it for IoT device-generated analytics and monitoring use cases with data indexing, search, and device metrics visualization in near real-time

## Input Plugin: MQTT Broker

Input plugin for [@sematext/logagent](https://sematext.com/logagent/). The plugin starts a MQTT Broker and emits each received message (all topics) to Logagent processing pipeline.  

### Configuration

```yaml
# mqtt-input.yaml
input:
  mqtt-broker:
    module: input-mqtt-broker
    port: 1883
    # regular expression to ignore topics
    ignoreTopic: ^\$SYS
    debug: false
    # enable authentication by setting username and password
    # username: mqtt
    # password: secret
    # The authenticate function can implement custom authentication logic 
    # authenticate: !!js/function > 
    #   function (client, username, password, callback) { 
    #     callback(null, username=='mqtt' && password === 'secret')
    #   }

output:
  stdout: yaml
  elasticsearch: 
    module: elasticsearch
    url: https://logsene-receiver.sematext.com
    # default index 
    index: bb308f80-0453-485e-xxxx-f80c054a0f09
    # routing topics to different indicies
    indices:
          bb308f80-0453-485e-xxxx-f80c054a0f10:
              - log-m.*
          bb308f80-0453-485e-xxxx-f80c054a0f11:
              - sensor-.*

```

### Start Logagent

```
logagent --config mqtt-input.yaml
```

### Send MQTT messages

```
npm i -g mqtt
mqtt pub -h localhost -p 1833 -t log-messages -m "Hello MQTT"
mqtt pub -h localhost -p 1833 -t sensor-data -m '{"temperature": 11}'
```
