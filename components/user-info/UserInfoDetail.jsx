import classes from "./UserInfoDetail.module.css";

function UserInfoDetail() {
  return (
    <section className={classes.Main}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Order Number</th>
            <th scope="col">Date</th>
            <th scope="col">Total Price</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">000001</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000002</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000003</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000004</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000005</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000006</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000007</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000008</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
          <tr>
            <th scope="row">000009</th>
            <td>26/1/2024</td>
            <td>$555.50</td>
            <td>Completed</td>
            <td>
              <a href="#">Order Details</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#">Reorder</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default UserInfoDetail;
