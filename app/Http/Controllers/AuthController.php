<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AuthController extends Controller
{
    public function login(request $request)
    {
    	$client = new Client();

			$response = $client->post('http://www.gestor.com/oauth/token', [
			    'form_params' => [
			        'grant_type' => 'password',
			        'client_id' => '2',
			        'client_secret' => 'LsyMw150dj8EvzcAKf8UdCCrBPgl2FJ7XielxND6',
			        'username' =>  $request->username,
			        'password' =>  $request->password,		        
			    ]
			]);
				return $response->getBody();
	}

	public function logout()
	{
		auth()->user()->tokens->each(function($token, $key){
			$token->delete();
		});

		return response()->json('Logged out successfully', 200);
	}

}
    	