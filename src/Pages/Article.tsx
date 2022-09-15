import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL_API } from "../Constants/URLs";
import { fetchApi } from "../Helper/callApiHelper";
import { useDispatch } from 'react-redux';
import { ADD_ARTICLE_SUCCESS } from "../Constants/ActionTypes";
import withAuthenticated from "../Components/HOCs/withAuthenticated";

const Article = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _handleSubmit = async (values: any) => {
    if (!props.currentUser.email){
      alert('Missing author');
      return;
    }
    const sendData = convertData({...values, authorEmail: props.currentUser.email, authorName: props.currentUser.name ? props.currentUser.name : '_hiu.1710'});

    const response = await fetchApi(`${BASE_URL_API}/article`, "POST", sendData);
    if (response.status === 200) {
      dispatch({
        type: ADD_ARTICLE_SUCCESS,
        payload: {
          article: sendData
        }
      })
      navigate('/');
    }else {
      alert("Error: " + response.status);
    }
  };

  const convertData = ({authorEmail, title, description, images, authorName}: any) => {
    return {
      authorEmail,
      title,
      description,
      authorName,
      images: [images]
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="p-2">
        <div className="h-12">
          <div className="flex flex-row justify-center">
            <h1 className="font-bold">Add new article</h1>
          </div>
        </div>
        <div className="mt-2">
          <Formik
            initialValues={{ title: "", description: "", authorEmail: props.currentUser.email, images: "" }}
            onSubmit={_handleSubmit}
          >
            {() => (
              <Form className="flex flex-col align-center p-2">
                <Field
                  name="title"
                  type="text"
                  placeholder="What cha..."
                  className="w-full border border-gray-200 rounded-sm p-2 mb-1"
                />
                <Field
                  name="description"
                  type="text"
                  placeholder="Description"
                  className="w-full border border-gray-200 rounded-sm p-2"
                />
                <Field
                  name="images"
                  type="text"
                  placeholder="Image"
                  className="w-full border border-gray-200 rounded-sm p-2 mt-1"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded p-1 mt-1"
                >
                  Submit
                </button>
                <Link to="/">
                  <button
                    type="submit"
                    className="bg-red-500 w-full text-white rounded p-1 mt-1"
                  >
                    Back
                  </button>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticated(Article);
