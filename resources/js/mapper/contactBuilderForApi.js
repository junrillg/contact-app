const contactBuilderForApi = data => ({
  firstName: data.firstName,
  lastName: data.lastName,
  phoneNumbers: data.phoneNumbers.map(data => parseInt(data.number, 10)),
});

export default contactBuilderForApi;
