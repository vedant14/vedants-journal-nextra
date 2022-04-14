import data from '../data/side-projects.json'

export default function SideProjects() {
  return (
    <div>
      <ol>
        {data.map((item, i) => (
          <li key={i} style={{ marginBottom: '30px' }}>
            <div>
              <a href={item.link} target="_blank">
                {item.name}
              </a>{' '}
              -{' '}
              <span
                style={{
                  background: item.color,
                  borderRadius: '10px',
                  padding: '2px 8px'
                }}
              >
                {item.state}
              </span>
            </div>
            <ul>
              <li>{item.whatItIs}</li>
              {item.highlights && item.highlights.length > 0 && (
                <li>
                  <strong>Some highlights</strong>
                  <ul>
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
