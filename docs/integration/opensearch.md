title: OpenSearch Monitoring Integration
description: Collect and monitor key OpenSearch metrics such as Cluster States and Pending Tasks, memory tied to shards, search latency, request rate, request cache, query/filter cache with built-in anomaly detection, threshold, and heartbeat alerts. Send notifications to email and various chatops messaging services, correlate events & logs, filter metrics by server, node, time or index, and visualize your cluster's health with out of the box graphs and custom dashboards

## Integration

- Instructions: [https://apps.sematext.com/ui/howto/opensearch/overview](https://apps.sematext.com/ui/howto/opensearch/overview)

## Important Metrics to Watch and Alert on

### OpenSearch specific metrics

#### Search Query performance metrics: Request Rate and Latency
When the cluster receives a request, it may need to access data from multiple shards, across multiple nodes. Knowing the rate at which the system is processing and returning requests, how many requests are currently in progress, and how long requests are taking can provide valuable insights into the health and performance of the OpenSearch cluster.

<img class="content-modal-image" alt="Request Rate" src="../../images/integrations/opensearch-request-rate.png" title="Request Rate">

<img class="content-modal-image" alt="Latency" src="../../images/integrations/opensearch-latency.png" title="Latency">

#### Indexing Rate and Merge Times
Monitoring the OpenSearch document indexing rate and merge time can help identify anomalies and related problems before they begin to affect the performance of the cluster. Considering these metrics in parallel with the health of each node can provide essential clues to potential problems within the system, or opportunities to optimize performance.

<img class="content-modal-image" alt="Merged Documents" src="../../images/integrations/opensearch-merged-documents.png" title="Merged Documents">

<img class="content-modal-image" alt="Refresh, Flush, Merge" src="../../images/integrations/opensearch-indexing-merge.png" title="Refresh, Flush, Merge">

### System and JVM Metrics
OS metrics like CPU, memory, disk I/O, and network play an essential role in OpenSearch monitoring.

OpenSearch runs within a Java Virtual Machine (JVM) and [monitoring JVM](https://sematext.com/docs/integration/jvm/) heap usage is critical to ensure cluster performance. Moreover, JVM supports [garbage collection](https://sematext.com/docs/integration/jvm-gc-logs/), which means that garbage collection frequency and duration are just as important to measure.

Finally, high disk reads and writes can indicate a poorly tuned system. Since accessing the disk is an expensive process in terms of time, a well-tuned system should reduce disk I/O wherever possible.

## Metrics

Metric Name<br> Key *(Type)* *(Unit)*                                                                             |  Description
------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------
outgoing searches<br>**adaptiveReplicaSelection.searches.outgoing** <br>*(long gauge)*                            |  Searches from the monitored node to the remote node
average queue size<br>**adaptiveReplicaSelection.queue.size.avg** <br>*(double gauge)*                            |  Exponentially weighted moving average queue size for searches on the remote node
average service time<br>**adaptiveReplicaSelection.service.time.avg** <br>*(long gauge)* *(ns)*                   |  Exponentially weighted moving average task execution time on the remote node
average response time<br>**adaptiveReplicaSelection.response.time.avg** <br>*(long gauge)* *(ns)*                 |  Exponentially weighted moving average response time on the remote node
rank<br>**adaptiveReplicaSelection.rank** <br>*(double gauge)*                                                    |  Rank of the remote node used for replica selection
inFlightRequests max size<br>**circuitBreaker.inFlightRequests.size.max** <br>*(long gauge)* *(bytes)*            |  Max in-flight requests size
inFlightRequests estimated size<br>**circuitBreaker.inFlightRequests.size.estimate** <br>*(long gauge)* *(bytes)* |  Estimated in-flight requests size
inFlightRequests overhead<br>**circuitBreaker.inFlightRequests.size.overhead** <br>*(double gauge)*               |  In-flight requests overhead
inFlightRequests tripped<br>**circuitBreaker.inFlightRequests.tripped** <br>*(counter)*                           |  In-flight requests circuit breaker tripped
nodes<br>**cluster.nodes** <br>*(long gauge)*                                                                     |  Number of nodes in the cluster
data nodes<br>**cluster.nodes.data** <br>*(long gauge)*                                                           |  Number of data nodes in the cluster
active primary shards<br>**cluster.health.shards.active.primary** <br>*(long gauge)*                              |  Number of active primary shards
active shards<br>**cluster.health.shards.active** <br>*(long gauge)*                                              |  Number of active shards
relocating shards<br>**cluster.health.shards.relocating** <br>*(long gauge)*                                      |  Number of currently relocating shards
unassigned shards<br>**cluster.health.shards.unassigned** <br>*(long gauge)*                                      |  Number of currently unassigned shards
pending tasks<br>**cluster.health.pendingTasks.total** <br>*(long gauge)*                                         |  Number of currently pending tasks in master's queue
pending tasks max waiting time<br>**cluster.health.pendingTasks.maxQueueTime** <br>*(long gauge)* *(ms)*          |  Maximum time for a task in master's queue
open TCP conns<br>**connection.tcp.server.open** <br>*(long gauge)*                                               |  Open TCP conns (server_open)
network received packets<br>**transport.rx.packets** <br>*(counter)*                                              |  Network received packets count (rx_count)
network received size<br>**transport.rx.bytes** <br>*(counter)* *(bytes)*                                         |  Network received size (rx_size)
network transmitted packets<br>**transport.tx.packets** <br>*(counter)*                                           |  Network transmitted packets count (tx_count)
network transmitted size<br>**transport.tx.bytes** <br>*(counter)* *(bytes)*                                      |  Network transmitted size (tx_size)
cluster state incompatible diff updates<br>**cluster.state.published.diff.incompatible** <br>*(counter)*          |  Cluster state incompatible diff updates published
cluster state compatible diff updates<br>**cluster.state.published.diff.compatible** <br>*(counter)*              |  Cluster state compatible diff updates published
docs count<br>**index.docs.total** <br>*(long gauge)*                                                             |  Docs count on all (primary and replica) shards
docs deleted<br>**index.docs.deleted.total** <br>*(long gauge)*                                                   |  Docs deleted on all (primary and replica) shards
ingest calls<br>**ingest.calls.total** <br>*(counter)*                                                            |  Number of calls to this pipeline
ingest failures<br>**ingest.calls.errors** <br>*(counter)*                                                        |  Number of failed calls to this pipeline
ingest time<br>**ingest.time** <br>*(counter)* *(ms)*                                                             |  Time spent in this pipeline
read ops<br>**disk.io.operations.read** <br>*(counter)*                                                           |  Disk IO read operations
write ops<br>**disk.io.operations.write** <br>*(counter)*                                                         |  Disk IO write operations
gc collection count<br>**gc.collection.count** <br>*(counter)*                                                    |  Count of GC collections
gc collection time<br>**gc.collection.time** <br>*(counter)* *(ms)*                                               |  Duration of GC collections
heap_used<br>**heap.used** <br>*(gauge)* *(bytes)*                                                                |  JVM heap used memory
heap.committed<br>**heap.committed** <br>*(gauge)* *(bytes)*                                                      |  JVM heap committed
non_heap_used<br>**nonheap.used** <br>*(gauge)* *(bytes)*                                                         |  JVM non-heap used memory
non_heap_committed<br>**nonheap.committed** <br>*(gauge)* *(bytes)*                                               |  JVM non-heap committed
open files<br>**files.open** <br>*(gauge)*                                                                        |  JVM currently open files
max open files<br>**files.max** <br>*(gauge)*                                                                     |  JVM max open files limit
used<br>**pool.used** <br>*(gauge)* *(bytes)*                                                                     |  JVM pool used memory
max<br>**pool.max** <br>*(gauge)* *(bytes)*                                                                       |  JVM pool max memory
thread count<br>**threads** <br>*(gauge)*                                                                         |  JVM thread count
peak thread count<br>**threads.peak** <br>*(gauge)*                                                               |  Peak JVM thread count
merge count<br>**indexing.merges.total** <br>*(counter)*                                                          |  Merge count on all (primary and replica) shards
merge time<br>**indexing.merges.time.total** <br>*(counter)* *(ms)*                                               |  Merge time on all (primary and replica) shards
merged docs count<br>**indexing.merges.docs.total** <br>*(counter)*                                               |  Merged docs count on all (primary and replica) shards
merged docs size<br>**indexing.merges.docs.size.total** <br>*(counter)* *(bytes)*                                 |  Merged docs size on all (primary and replica) shards
throttled merge time<br>**indexing.merges.throttled.time.total** <br>*(counter)* *(ms)*                           |  Throttled time for merges (i.e. when merges fall behind) on all (primary and replica) shards
throttled merge size<br>**indexing.merges.throttled.size.total** <br>*(counter)* *(bytes)*                        |  Size of throttled merges on all (primary and replica) shards
field cache evictions<br>**cache.field.evicted** <br>*(counter)*                                                  |  Field cache evictions
field cache size<br>**cache.field.size** <br>*(long gauge)*                                                       |  Field cache size
number of processors<br>**cpu.allocated.count** <br>*(long gauge)*                                                |  Number of processors allocated to the OpenSearch process
refresh count<br>**indexing.refreshes.total** <br>*(counter)*                                                     |  Refresh count on all (primary and replica) shards
refresh time<br>**indexing.refreshes.time.total** <br>*(counter)* *(ms)*                                          |  Refresh time on all (primary and replica) shards
script compilations<br>**script.compilations.total** <br>*(counter)*                                              |  Script compilations (use params in scripts to reduce them)
script cache evictions<br>**script.cache.evictions** <br>*(counter)*                                              |  Script cache evictions
script compilations limit triggered<br>**script.compilations.limitTriggered** <br>*(counter)*                     |  Script compilations circuit breaker triggered (see script.max_compilations_rate setting)
query count<br>**query.count.total** <br>*(counter)*                                                              |  Query count on all (primary and replica) shards
query latency<br>**query.latency.time.total** <br>*(counter)* *(ms)*                                              |  Query latency on all (primary and replica) shards
fetch count<br>**fetch.count.total** <br>*(counter)*                                                              |  Fetch count on all (primary and replica) shards
fetch latency<br>**fetch.latency.time.total** <br>*(counter)* *(ms)*                                              |  Fetch latency on all (primary and replica) shards
suggest count<br>**suggest.count.total** <br>*(counter)*                                                          |  Suggest count on all (primary and replica) shards
suggest latency<br>**suggest.latency.time.total** <br>*(counter)* *(ms)*                                          |  Suggest latency on all (primary and replica) shards
scroll count<br>**scroll.count.total** <br>*(counter)*                                                            |  Scroll count on all (primary and replica) shards
scroll latency<br>**scroll.latency.time.total** <br>*(counter)* *(ms)*                                            |  Scroll latency on all (primary and replica) shards
search open contexts<br>**search.opencontexts.total** <br>*(long gauge)*                                          |  Open search contexts on all (primary and replica) shards
avg. query latency<br>**query.latency.total.avg** <br>*(gauge)* *(ms)*                                            |  Avg. query latency on all (primary and replica) shards
segments count<br>**segments.count.total** <br>*(long gauge)*                                                     |  Number of segments
segments memory<br>**segments.memory.total** <br>*(long gauge)* *(bytes)*                                         |  Total memory for segment-related data structures
terms memory<br>**segments.memory.terms** <br>*(long gauge)* *(bytes)*                                            |  Memory used by the terms dictionary
stored fields memory<br>**segments.memory.storedFields** <br>*(long gauge)* *(bytes)*                             |  Memory used by stored fields
term vectors memory<br>**segments.memory.termVectors** <br>*(long gauge)* *(bytes)*                               |  Memory used by term vectors
norms memory<br>**segments.memory.norms** <br>*(long gauge)* *(bytes)*                                            |  Memory used by (length) norms
points memory<br>**segments.memory.points** <br>*(long gauge)* *(bytes)*                                          |  Memory used by point fields (includes numeric, date, geo)
doc values memory<br>**segments.memory.docValues** <br>*(long gauge)* *(bytes)*                                   |  Memory used by doc values
indexing buffer memory<br>**segments.memory.indexWriter** <br>*(long gauge)* *(bytes)*                            |  Memory used by the IndexWriter
version map memory<br>**segments.memory.versionMap** <br>*(long gauge)* *(bytes)*                                 |  Memory used by the version map
fixed bitset memory<br>**segments.memory.fixedBitSet** <br>*(long gauge)* *(bytes)*                               |  Memory used by the fixed bitset that speeds up nested queries/aggregations
unassigned shards<br>**cluster.shards.unassigned** <br>*(long gauge)*                                             |  Number of unassigned shards
active shards<br>**cluster.shards.active** <br>*(long gauge)*                                                     |  Number of active shards
active primary shards<br>**cluster.shards.active.primary** <br>*(long gauge)*                                     |  Number of active primary shards
initializing shards<br>**cluster.shards.initializing** <br>*(long gauge)*                                         |  Number of initializing shards
relocating shards<br>**cluster.shards.relocating** <br>*(long gauge)*                                             |  Number of relocating shards
active threads<br>**thread.pool.active** <br>*(long gauge)*                                                       |  Active threads
thread pool size<br>**thread.pool.size** <br>*(long gauge)*                                                       |  Thread pool size
thread pool queue<br>**thread.pool.queue** <br>*(long gauge)*                                                     |  Thread pool queue
thread pool queue size<br>**thread.pool.queue.size** <br>*(long gauge)*                                           |  Thread pool queue size
rejected threads<br>**thread.pool.rejected** <br>*(counter)*                                                      |  Rejected threads
thread pool largest<br>**thread.pool.largest** <br>*(long gauge)*                                                 |  Thread pool largest
completed threads<br>**thread.pool.completed** <br>*(counter)*                                                    |  Complete threads
thread pool min<br>**thread.pool.min** <br>*(long gauge)*                                                         |  Thread pool min
thread pool max<br>**thread.pool.max** <br>*(long gauge)*                                                         |  Thread pool max
