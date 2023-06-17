import React from 'react'

function NoPermission() {
  return (
    <div>
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">401</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Seems like you don't have permission to access This Web Page.</p>
                <p class="lead">
                    Unauthorized Access. Please log in to continue.
                  </p>
                <a href="http://localhost:3000/login" class="btn btn-primary">Login</a>
            </div>
        </div>
    </div>
  )
}

export default NoPermission