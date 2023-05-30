import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaAt } from "react-icons/fa";
import Image from "react-bootstrap/Image";

const Upload = () => {
  const imageCap = 10;
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1 || images.length > imageCap) return;
    const newImageUrls = [...imageURLs, ...images.map(URL.createObjectURL)];
    setImageURLs(newImageUrls);
  }, [images, imageURLs]);

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Upload</h1>
      <Form>
        <InputGroup className="mb-3" controlId="formInsta">
          <InputGroup.Text id="basic-addon1">
            <FaAt />
          </InputGroup.Text>
          <Form.Control placeholder="instagram" style={{ maxWidth: 400 }} />
        </InputGroup>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Upload Multiple Images, (max.{imageCap}) </Form.Label>
          <Form.Control
            type="file"
            multiple
            accept="image/*"
            onChange={onImageChange}
          />
        </Form.Group>
        <Form.Group>
          {imageURLs.map((imageSrc) => (
            <InputGroup className="mb-3" controlId="formImage">
              <InputGroup.Text id="basic-addon1">
                <div style={{ display: "block", width: 150, height: 150 }}>
                  <Image src={imageSrc} thumbnail />
                </div>
              </InputGroup.Text>
              <div
                key={`inline-radio`}
                className="mb-3"
                style={{ padding: 30 }}
              >
                {["1", "2", "3", "4", "5"].map((rating) => (
                  <Form.Check
                    inline
                    label={rating}
                    name={`group-${imageSrc}`}
                    type="radio"
                    id={`inline-radio-${rating}`}
                  />
                ))}
              </div>
            </InputGroup>
          ))}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Upload;
