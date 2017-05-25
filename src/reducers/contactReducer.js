// @flow
const contactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT': {
      const dealsToLeave = [
        ...state.deals.filter(deal => (deal.id !== action.payload.id)),
      ];
      const dealToUpdate = {
        ...state.deals.find(deal => deal.id === action.payload.id),
      };
      return ({
        ...state,
        deals: [
          ...dealsToLeave,
          {
            ...dealToUpdate,
            contacts: [
              ...dealToUpdate.contacts,
              action.payload.contact,
            ],
          },
        ],
      });
    }
    case 'DELETE_CONTACT': {
      const dealsToLeave = [
        ...state.deals.filter(deal => (deal.id !== action.payload.id)),
      ];
      const dealToUpdate = {
        ...state.deals.find(deal => deal.id === action.payload.id),
      };
      return ({
        ...state,
        deals: [
          ...dealsToLeave,
          {
            ...dealToUpdate,
            contacts: [
              ...dealToUpdate.contacts
                .filter(contact => (
                  contact.name !== action.payload.contact.name
                  || contact.email !== action.payload.contact.email
                  || contact.phone !== action.payload.contact.phone
                  || contact.role !== action.payload.contact.role
                )),
            ],
          },
        ],
      });
    }
    case 'EDIT_DEAL':
      return state;
    default:
      return state;
  }
};

export default contactReducer;
