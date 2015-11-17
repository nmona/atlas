# The Atlas of Networks

**A collection of networked systems found in nature and everyday living.**

## Classification

All networks are classified the same way and stored in a [flat-file database](https://github.com/networkedartifacts/atlas/tree/master/data/networks).

### Section `definition`

- `name`: The specific name of the network, which should be pluralizable.
- `nodes`: A list of 1 to ∞ node names that appear as "things" in the network.
- `edges`: A list of 1 to ∞ edge names that interconnect the nodes in the network.
- `mediums`: A list of 1 to ∞ medium names that are used by the network to serve its purpose.

### Section `attributes`

- `topology`: Either `centralized`, `decentralized` or `distributed`. Networks with a distinct center are centralized, networks with multiple centers are decentralized and networks with no centers are distributed.
- `scale`: Either `local` or `global`. Global networks tend to be by themselves, while local networks can be found in multiple places.
- `kind`: Either `natural` or `artificial`. A natural network has no artificial - man made parts, while artificial networks are fully created by mankind.
- `origin`: Either `evolved` or `designed`. Evolved networks became their layout throughout time in contrast to designed networks that have been set in place once without further changes.
- `visibility`: Either `visible` or `hidden`. A visible network can be consciously perceived and located in spaces.
- `usage`: Either `communication`, `transportation` or `organisation`. In a communication network, the medium serves as the carrier for messages that are sent between the nodes, in a transportation network, the medium itself is provided and consumed by nodes and in an organisation network the medium serves as a virtual matter or unit.
- `arrangement`: Either `static` or `dynamic`. Dynamic networks tend to change connections while static networks stay the same.
- `perception`: Either `entirely`, `partially` or `separately`. A network is perceived entirely if it acts as one entity and hides its structures. A partially perceived might only expose the main nodes and a separately perceived network discloses its complete structure.
- `stability`: Either `ephemeral` or `durable`. Ephemeral networks may last for only a fraction of time and vanish, while durable networks last long and slowly decay.
- `reactivity`: Either `adaptive` or `limited`. Adaptive networks have the ability to change their structure in response to their goal and usage. Limited networks will keep their structure.

### Section `meta`

- `abstract`: Free-text describing the network.
- `image`: Photograph of the whole or partial network.

### Section `graph`

- `nodes`: A list of nodes for the graph visualization.
- `edges`: A list of edges that connect the nodes.

The graphs is configured in the following format:

```yml
graph:
  nodes:
    n1: Node 1
    n2: Node 2
    n3: Node 3
  edges:
    - n1:n2 n2:n3
    - n3:n1
```
