<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use phpseclib3\Net\SSH2;

class SshTunnelServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $ssh = new SSH2('82.165.237.222', '22');
        if (!$ssh->login('root', 'oG2zrnvG')) {
            \Log::error('SSH tunnel login failed.');
            return;
        }
        echo $ssh;
        echo "ssh connecting...";
        // $result = $ssh->exec('sshpass -p "oG2zrnvG" ssh -v -N -L 127.0.0.1:5433:localhost:5432 root@82.165.237.222 -o "PasswordAuthentication yes"');
        // echo $result;
        echo "ssh connected successfully!:";
    }
}
