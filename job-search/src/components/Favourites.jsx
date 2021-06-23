import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
// import { removeItemFromCartAction } from "../actions";

const mapStateToProps = state => ({
  jobs: state.favourites.jobs
})

// const mapDispatchToProps = dispatch => ({
//   removeFromCart: (index) => {
//     dispatch(removeItemFromCartAction(index))
//   }
// })

const Cart = ({ jobs, removeFromCart }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {jobs.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromCart(i)}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{" "}
        {jobs.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
);

export default connect(mapStateToProps)(Cart);