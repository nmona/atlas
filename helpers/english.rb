module English
  VOWELS = %w(a e i o u y)

  TOPOLOGIES = {
    ring: 'Ring',
    mesh: 'Mesh',
    star: 'Star',
    fully_connected: 'Fully Conncted',
    line: 'Line',
    tree: 'Tree',
    bus: 'Bus',
  }

  def topology(key)
    TOPOLOGIES[key.to_sym]
  end

  def enumerate(list_or_name)
    return list_or_name if list_or_name.is_a? String
    return '' unless list_or_name.is_a? Array
    return list_or_name[0] if list_or_name.count == 1
    list_or_name[0..-2].join(', ') + ' and ' + list_or_name[-1]
  end

  def article(name)
    (VOWELS.include?(name[0].downcase) ? 'an' : 'a').titlecase
  end

  def explain(network)
    a = article(network.name)
    n = enumerate(network.nodes)
    e = enumerate(network.edges)
    "#{a} <strong>#{network.name}</strong> consists of <em>#{n}</em> interconnected by " +
      "<em>#{e}</em> communicating through <em>#{network.medium}</em>."
  end
end
