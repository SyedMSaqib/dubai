export function generateEmailHTML(booking: any, metadata: any, formattedTime: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
            body { 
                font-family: 'Helvetica Neue', Arial, sans-serif; 
                background-color: #f4f4f7; 
                margin: 0; 
                padding: 0; 
                color: #333;
            }
            .container { 
                max-width: 650px; 
                margin: 0 auto; 
                background-color: #ffffff; 
                padding: 40px; 
                border-radius: 10px; 
                box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
            }
            h1 { 
                color: #004085; 
                font-size: 28px; 
                margin-bottom: 20px; 
                text-align: center; 
            }
            p { 
                font-size: 16px; 
                line-height: 1.8; 
                margin: 10px 0; 
            }
            .booking-details { 
                background-color: #e9ecef; 
                border-left: 4px solid #004085; 
                padding: 20px; 
                border-radius: 8px; 
                margin-top: 30px; 
            }
            .booking-details p { 
                margin: 12px 0; 
                font-size: 15px; 
            }
            .booking-details p strong { 
                color: #212529; 
            }
            .footer { 
                margin-top: 30px; 
                font-size: 14px; 
                text-align: center; 
                color: #6c757d; 
                border-top: 1px solid #dee2e6; 
                padding-top: 15px; 
            }
            .btn {
                display: inline-block;
                padding: 12px 25px;
                font-size: 16px;
                color: #ffffff;
                background-color: #004085;
                border-radius: 5px;
                text-decoration: none;
                text-align: center;
                margin-top: 25px;
                margin-bottom: 15px;
            }
            .btn:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Booking Confirmation</h1>
            <p>Dear ${metadata.user_first_name},</p>
            <p>We’re delighted to confirm your booking! Below are the details of your reservation:</p>
            
            <div class="booking-details">
                <p><strong>Booking ID:</strong> ${booking.id}</p>
                <p><strong>Tour Date:</strong> ${metadata.tour_date}</p>
                <p><strong>Tour Time:</strong> ${formattedTime}</p>
                <p><strong>Adults:</strong> ${metadata.booking_adults}</p>
                <p><strong>Children:</strong> ${metadata.booking_child}</p>
                <p><strong>Transport:</strong> ${metadata.booking_transport_type}</p>
                <p><strong>Pick-up Point:</strong> ${metadata.user_pickup_point}</p>
                <p><strong>Total Amount:</strong> AED ${booking.totalPrice.toLocaleString()}</p>
            </div>
            
            <p>Feel free to reach out to us if you have any questions or need to make adjustments to your booking.</p>
            <a href="mailto:support@dubaitourism.com" class="btn">Contact Us</a>
            
            <p>We look forward to having you with us!</p>

            <div class="footer">
                <p>Warm regards,<br>Dubai Tourism LLC</p>
                <p>1234 Tourism St, Dubai, UAE | support@dubaitourism.com</p>
            </div>
        </div>
    </body>
    </html>
    `;
}
