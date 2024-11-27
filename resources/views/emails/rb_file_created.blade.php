<!DOCTYPE html>
<html>
<head>
    <title>Resbright Investments</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
<body style="padding: 2rem; background-color: #f7fafc; margin-right: auto; margin-left: auto; max-width: 60%; min-height: 100vh;  font-family: "Roboto", sans-serif;>
    <div style="background-color: #ffffff; border: 1px solid #e2e8f0;">
        <div style="display: flex; align-items: center; justify-content: center; background-color: #008b8b; padding: 1.2rem; margin: 1rem;">
            <p style="color: #ffffff; font-size: 2rem; font-weight: 600;">Your Rb File has been created.</p>
        </div>
        <div style="padding: 1rem; margin-top: 0.25rem; margin-bottom: 0.5rem; color: #4a5568;">
            <p style="margin-bottom: 1rem;">Hi {{$rbFile->user->name}}</p>

            <p>
            	Your Rb File has been created. Please confirm the following details:
            </p>
            <ul style="margin-bottom: 0.5rem; margin-top: 0.5rem;">
                <li>
                    <h6>Container:</h6>
                    <p>{{$rbFile->container}}</p>
                </li>
                <li>
                    <h6>Importer:</h6>
                    <p>{{$rbFile->importer}}</p>
                </li>
                <li>
                    <h6>Supplier:</h6>
                    <p>{{$rbFile->supplier}}</p>
                </li>
                <li>
                    <h6>Weight:</h6>
                    <p>{{$rbFile->weight}}</p>
                </li>
                <li>
                    <h6>Currency:</h6>
                    <p>{{$rbFile->currency}}</p>
                </li>
            </ul>

            <p>Your invoice will be sent shortly.</p>

            <p>Sincerely,</p>

            <p>
            Resbright Investments team.
            </p>
        </div>
    </div>
    <div>
    <p style="color: #a0aec0; font-size: 0.75rem; text-align: center; margin-top: 1rem;">
        Resbright Investments Zimbabwe - Developed by 
        <a href="https://menokws.co.zw" style="color: #1d4ed8;">Menokws</a>
    </p>
    </div>
</body>
</html>
