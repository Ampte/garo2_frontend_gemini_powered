import React, { useState } from 'react';

const Form = () => {

    const [queries, setQueries] = useState({
        text: ''
    });

    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        setQueries({
            text: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                'https://garo2-backend-gemini-powered.onrender.com/translate',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(queries)
                }
            );

            const data = await res.json();

            setResponse(data.message);

        } catch (error) {
            console.error(error);
            alert('Error fetching translation');
        }
    };

    return (
        <>
            <div className="form-floating">
                <form onSubmit={handleSubmit}>
                    <textarea
                        onChange={handleChange}
                        name="text"
                        className="form-control"
                        placeholder="Type English or Garo words or sentences to translate"
                        id="floatingTextarea2"
                        style={{ height: '100px' }}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                    >
                        Translate
                    </button>

                    <button
                        type="reset"
                        className="btn btn-danger m-2"
                    >
                        Clear
                    </button>
                </form>
            </div>

            <div className="row mt-5">
                <h3>
                    {response || 'Translation will appear here!'}
                </h3>
            </div>
        </>
    );
};

export default Form;