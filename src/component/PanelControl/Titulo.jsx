import React from 'react';

const Titulo = (prosp) => {
  return (
        <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h3 className="m-0 text-dark">{prosp.name}</h3>
                </div>{/* /.col */}
            </div>{/* /.row */}
        </div>{/* /.container-fluid */}
    </div>
  );
};

export default Titulo;
