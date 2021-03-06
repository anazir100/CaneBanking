import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const transaction = JSON.parse(event.body);
    client.connect();

    const query = `insert into transactions (transaction_id,
                                            time_stamp,
                                            vendor,
                                            vendor_account_id,
                                            transaction_amt,
                                            account_id,
                                            customer_id) values ($1, $2, $3, $4, $5, $6, $7)`;


    const values = [transaction.transaction_id,
                    transaction.time_stamp,
                    transaction.vendor,
                    transaction.vendor_account_id,
                    transaction.transaction_amt,
                    transaction.account_id,
                    transaction.customer_id ];

    let response = await client.query(query, values);

    if (response) {
        client.end();
        return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        }
        };
    } else {
        client.end();
        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
            }
        };
    }
}
