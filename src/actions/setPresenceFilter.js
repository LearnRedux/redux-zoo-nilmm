export const SET_PRESENCE_FILTER = 'zoo/SET_PRESENCE_FILTER';
export const setPresenceFilter = (name) => ({
  type: SET_PRESENCE_FILTER,
  filter: name
});
