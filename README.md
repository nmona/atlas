# The Atlas of Networks

**A collection of networked systems found in nature and everyday living.**

This collection is a part of [networkedartifacts.info](http://networkedartifacts.info) and curated by its authors. The data has been collected in the research project "Basic Interaction Design Methods for Networked Artifacts". The entries have been authored by students as an analytical exercise in the course "Embodied Interaction" at the Zurich University of the Arts in 2015.

Data can be downloaded as [JSON](http://atlas.networkedartifacts.info/data.json) to be used for further computation.

## Classification

All networks are classified the same way and stored in a [flat-file database](https://github.com/networkedartifacts/atlas/tree/master/data/networks).

Section `definition`:

- `name`: What is the specific name of the network?
- `nodes`: What are the nodes that appear in this network?
- `edges`: What kind of connections interconnect the nodes?
- `medium`: What medium is used for that interconnection?

Section `attributes`:

- `topology`: Either `centralized`, `decentralized` or `distributed`.
- `origin`: Either `natural` or `artificial`.
- `visibility`: Either `visible` or `hidden`.
- `usage`: Either `communication`, `distribution` or `organisation`.
- `scale`: Either `local` or `global`.

Section `meta`:

- `abstract`: Free-text describing the network.
- `image`: Photograph of the whole or partial network.

Section `graph`:

- `nodes`: A list of nodes for the graph visualizations.
- `edges`: A list of edges connect the nodes.
