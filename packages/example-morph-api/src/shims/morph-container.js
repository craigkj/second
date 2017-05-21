export default function makeContainer (VDom, fetcher) {
  return {
    create (Component, params) {
      const container = class SecondContainer extends VDom.Component {
        constructor (props) {
          super(props)

          this.state = {
            data: fetcher.request(params.data(props))
          }
        }

        render () {
          return VDom.createElement(
            Component,
            Object.assign({}, this.props, this.state.data)
          )
        }
      }

      container.displayName = `SecondContainer/${Component.displayName}`

      return container
    }
  }
}