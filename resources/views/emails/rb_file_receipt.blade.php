<!DOCTYPE html>
<html>
<head>
    <title>Resbright Investments</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</head>
<body style="padding: 2rem; background-color: #f7fafc; margin-right: auto; margin-left: auto; max-width: 60%; min-height: 100vh;  font-family: ""Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;>
    <div style="background-color: #ffffff; border: 1px solid #e2e8f0;">
        <div style="display: flex; align-items: center; justify-content: center; background-color: #008b8b; padding: 36px 48px; margin: 2rem;">
           <h2 style="color: #ffffff; font-size: 1.87rem; font-weight: 300; margin:0;">
                Your Rb File Receipt number {{$paymet->id}}.
            </h2>
        </div>
        <div style="padding-left: 48px; padding-right: 48px; color: #636363; font-size: 14px">
            <p>Hi {{$payment->rb_file->user->name}}</p>

            <p style="margin: 0 0 16px">
            	I hope this email finds you well. Please find your invoice.
        	</p>

            <h3 style="color: #008b8b; display: block; font-weight: bold; font-size: 18px; line-height: 130%">
                [RbFile #{{$payment->rb_file->ref}}]
                ({{$payment->rb_file->updated_at}})
            </h3>

            <table 
            style="border-collapse: collapse; width: 100%; border-color: #BFC8BE; border: 1px solid #e5e5e5"
            >
              <tr style="border: 1px solid; border-color: #BFC8BE;">
                <th style="color: #636363; border: 1px solid #e5e5e5; vertical-align: middle;padding: 12px; text-align: left; font-weight: bold;">
                Item description
                </th>
                <th style="color: #636363; border: 1px solid #e5e5e5; vertical-align: middle;padding: 12px; text-align: left; font-weight: bold;"
                >
                Quantity of boxes
                </th>
                <th style="color: #636363; border: 1px solid #e5e5e5; vertical-align: middle;padding: 12px; text-align: left; font-weight: bold;"
                >
                Price
                </th>
              </tr>
              <tr>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">
                    {{$payment->rb_file->description}}
                </td>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">
                    {{$payment->rb_file->quantity_of_boxes}}
                </td>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">
                    {{-- {{$price->rb_file->quantity_of_boxes}} --}}
                </td>
              </tr>
              {{-- <tr>
                <td colspan="2" style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;"
                >
                Service Fee:
                </td>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;"
                >{{$price->us_price}}
                </td>
              </tr> --}}
              <tr>
                <td colspan="2" style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;"
                >Duty:</td>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;"
                >{{$payment->us_duty}}</td>
              </tr>
              <tr>
                <td colspan="2" style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">Service Fee:</td>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">{{$payment->us_price}}</td>
              </tr>
              <tr>
                <td colspan="2" style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">Total:</td>
                <td style="color: #636363; border: 1px solid #e5e5e5; padding: 12px; text-align: left; vertical-align: middle; font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif; word-wrap: break-word;">{{$payment->rb_file->paid}}</td>
              </tr>
            </table>


            <h3 style="color: #008b8b; display: block; font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; font-size: 18px; font-weight: bold; line-height: 130%; margin: 0 0 18px;text-align: left;"
            >
                Destination Address:
            </h3>

            <p>{{$price->rb_file->address1}} {{$price->rb_file->address2}} {{$price->rb_file->country}}</p>
        </div>
    </div>
    <div>
    <p style="color: #a0aec0; font-size: 0.75rem; text-align: center; margin-top: 1rem;">
        Resbright Investments - Developed by 
        <a href="https://menokws.co.zw" style="color: #1d4ed8;">Menokws</a>
    </p>
    </div>
</body>
</html>
