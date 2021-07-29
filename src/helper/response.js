const standartResponse = {
  success: (res, data, message) => {
    const response = {
      field: data,
      success: true,
      code: 200,
      message,
    };
    res.json(response);
  },
  failed: (res, code, err) => {
    if (code === 500) {
      const response = {
        success: false,
        data: null,
        code,
        error: err,
        message: 'Internal Server Error',
      };
      res.json(response);
    } else if (code === 400) {
      const response = {
        success: false,
        data: null,
        code,
        error: err,
        message: 'Bad Request',
      };
      res.json(response);
    } else if (code === 401) {
      const response = {
        success: false,
        data: null,
        code,
        error: err,
        message: 'Unauthorized',
      };
      res.json(response);
    } else if (code === 404) {
      const response = {
        success: false,
        data: null,
        code,
        error: err,
        message: 'Data Not Found',
      };
      res.json(response);
    } else if (code === 408) {
      const response = {
        success: false,
        data: null,
        code,
        error: err,
        message: 'Request Timeout',
      };
      res.json(response);
    }
  },
};

module.exports = standartResponse;
