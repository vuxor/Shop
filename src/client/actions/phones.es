'use strict';

import request from 'utils/request';

export function addPhone(phone) {
  return {
    type: 'ADD_PHONE',
    phone,
  };
}

export function deletePhone(index) {
  return {
    type: 'DELETE_PHONE',
    index,
  };
}

export function getAllPhones() {
	return async (dispatch) => {
		let data = await request.get('phones/getAll', {}).then((res) => {
			let { phones } = res;
			return phones;
		});

		return dispatch({
			phones: {phones: data},
			type: 'GET_ALL_PHONES'
		});
	};
}