<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ConvertArabicToLatin
{
    protected $arabicToLatinMap = [
        '٠' => '0', '١' => '1', '٢' => '2', '٣' => '3', '٤' => '4',
        '٥' => '5', '٦' => '6', '٧' => '7', '٨' => '8', '٩' => '9'
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $input = $request->all();
        $convertedInput = $this->convertArabicToLatin($input);
        $request->merge($convertedInput);

        return $next($request);
    }

    protected function convertArabicToLatin(array $input)
    {
        array_walk_recursive($input, function (&$item, $key) {
            $item = $this->convertString($item);
        });

        return $input;
    }

    protected function convertString($string)
    {
        return strtr($string, $this->arabicToLatinMap);
    }
}
