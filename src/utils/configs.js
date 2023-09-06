const PROJECT_ID = "ihgyfmp0d322";

export const getHeaderWithProjectId = () => {
  return {
    headers: { projectId: PROJECT_ID },
  };
};

export const getHeaderWithProjectIDAndBody = (body) => {
    console.log('body', JSON.stringify(body));
  return {
    headers: { projectId: PROJECT_ID, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
};

export const getAuthHeaderConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      projectID: PROJECT_ID,
    },
  };
};
