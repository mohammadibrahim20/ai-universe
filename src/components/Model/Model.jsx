import React from "react";

const Model = (props) => {
  const { description, features, image_link, integrations } = props.singleData;
  console.log(Object.values(features || {}));
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={image_link && image_link[0]} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {description ? description : "not found"}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Features</h1>
                  {Object.values(features || {}).map((value) => (
                    <p className="text-left">{value.feature_name}</p>
                  ))}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Integrations</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
