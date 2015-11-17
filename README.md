# The Atlas of Networks

**A collection of networked systems found in nature and everyday living.**

## Classification

All networks are classified the same way and stored in a [flat-file database](https://github.com/networkedartifacts/atlas/tree/master/data/networks).

### Section `definition`

- `name`: The name of the network. _What is the specific name of the network?_
- `nodes`: A list of 1 to ∞ node names. _What are the nodes that appear in this network?_
- `edges`: A list of 1 to ∞ edge names. _What kind of connections interconnect the nodes?_
- `mediums`: A list of 1 to ∞ medium names. _What medium is used for that interconnection?_

### Section `attributes`

- `topology`: Either `centralized`, `decentralized` or `distributed`.
- `scale`: Either `local` or `global`.
- `kind`: Either `natural` or `artificial`.
- `origin`: Either `evolved` or `designed`.
- `visibility`: Either `visible` or `hidden`.
- `usage`: Either `communication`, `transportation` or `organisation`.
- `arrangement`: Either `static` or `dynamic`.
- `perception`: Either `entirely`, `partially` or `separately`.
- `stability`: Either `ephemeral` or `durable`.
- `reactivity`: Either `adaptive` or `limited`.

### Section `meta`

- `abstract`: Free-text describing the network.
- `image`: Photograph of the whole or partial network.

### Section `graph`

- `nodes`: A list of nodes for the graph visualizations.
- `edges`: A list of edges connect the nodes.
