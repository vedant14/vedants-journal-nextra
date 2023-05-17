const YEAR = new Date().getFullYear()

export default {
  readMore: 'Expand →',
  titleSuffix: ' | Vedant Lohbare',
  postFooter: (
    <>
      <hr />
      <p>
        This site has no analytics. For any feedback / comments / suggestions or
        to just have a cup of coffee, you can{' '}
        <a href="https://twitter.com/VedantLohbare/" target="_blank">
          DM me here
        </a>
        .{' '}
      </p>
    </>
  ),
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Vedant Lohbare.
      <a href="https://twitter.com/VedantLohbare/" target="_blank">
        Twitter
      </a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}