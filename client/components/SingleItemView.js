import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {updateNavbar} from '../store/navbar'
import MapSingleItem from './MapSingleItem'
import {me} from '../store/user.js'
import {ChatContainer} from './index'

// Render functional
// const singleView = (props) => {
//   console.log(props)

// }

// Render Class
class SingleItemView extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser()
  // }

  componentWillUnmount() {
    this.props.updateNavbar(null, {})
  }

  render() {
    console.log('in SingleItemView, this.props', this.props)
    let {item} = this.props.location
    console.log('item!!!!', item)

    if (!this.props.location.item) {
      return <Redirect to="/items" />
    }

    return (
      <div className="container-fluid mb-4 p-0" style={{height: '90vh'}}>
        <div
          className="d-flex flex-column justify-content-evenly"
          style={{height: '100%'}}
        >
          <div>
            <h5 className="text-center mb-1">{item.itemListName}</h5>
            <h6 className="text-center text-secondary">
              Submitted by: {item.user.firstName}
              {
                <div className="chat">
                  <Link
                    to={{
                      pathname: '/chat',
                      state: this.props.item,
                    }}
                  >
                    <div>
                      <button type="button" className="btn btn-success">
                        Reply to this post
                      </button>
                    </div>
                  </Link>
                </div>
              }
              {console.log('this.props.status!!!!', this.props.status)}
              {this.props.status === 'Open' ? (
                <div className="closeItem">
                  <button type="button" className="btn btn-warning">
                    Mark this item as closed
                  </button>
                </div>
              ) : null}
            </h6>
          </div>
          <div className="col">
            <div
              id="itemImageIndicator"
              className="carousel slide mx-auto"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-indicators"
                style={{filter: 'invert(1)'}}
              >
                {item.itemPhotos.map((element, idx) => (
                  <button
                    type="button"
                    data-bs-target="#itemImageIndicator"
                    data-bs-slide-to={idx}
                    className={idx === 0 ? 'active' : ''}
                    aria-current={idx === 0 ? 'true' : ''}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="carousel-inner">
                {item.itemPhotos.map((photo, idx) => (
                  <div
                    className={
                      idx === 0 ? 'carousel-item active' : 'carousel-item'
                    }
                  >
                    <img
                      src={photo.downloadURL}
                      className="d-block w-80 imgSliders"
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#itemImageIndicator"
                data-bs-slide="prev"
                style={{filter: 'invert(1)'}}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#itemImageIndicator"
                data-bs-slide="next"
                style={{filter: 'invert(1)'}}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col m-sm-auto m-md-0">
            <a
              className="btn btn-secondary mx-auto mb-3 rounded-pill d-flex justify-content-evenly align-items-center d-md-none"
              data-bs-toggle="collapse"
              href="#mapCollapse"
              role="button"
              id="mapCollapseButton"
              style={{width: '150px', height: '30px'}}
            >
              <p className="m-0">View on map</p>
              <i
                className="bi bi-compass"
                style={{
                  color: 'white',
                  fontSize: '1.4rem',
                }}
              />
            </a>
            <div className="fixed-bottom d-md-none">
              <div className="collapse" id="mapCollapse">
                <a
                  className="btn btn-secondary rounded-0 d-flex justify-content-center align-items-center"
                  data-bs-toggle="collapse"
                  href="#mapCollapse"
                  role="button"
                  style={{width: '100vw', height: '5vh'}}
                >
                  <i
                    className="bi bi-chevron-compact-up"
                    id="chevron-rotate"
                    style={{
                      color: 'white',
                      fontSize: '2rem',
                    }}
                  />
                </a>
                <div
                  className="bg-secondary rounded-top"
                  id="mapContainer"
                  style={{height: '95vh'}}
                >
                  {this.props.updateNavbar('singleview', item)}
                  <MapSingleItem item={item} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="d-flex flex-column justify-content-evenly"
              style={{height: '100%'}}
            >
              <div></div>

              <div>
                <h3 className="text-center mb-1">Description</h3>
                <p
                  className="bg-secondary text-light py-3 px-4 mx-auto fs-6"
                  style={{width: '80%'}}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

// const mapState = (state) => ({
//   placeholder: state.placeholder,
// })

const mapDispatch = (dispatch) => ({
  updateNavbar: (page, items) => {
    dispatch(updateNavbar(page, items))
  },
  fetchUser: () => dispatch(me()),
})

export default connect(null, mapDispatch)(SingleItemView)
