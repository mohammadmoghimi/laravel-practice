<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherRequest extends Model
{
    use HasFactory;

    // Specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'teacher_requests';

    // Mass assignable attributes
    protected $fillable = [
        'teacher_id',
        'student_id',
        'status',
    ];

    /**
     * The teacher associated with this request.
     */
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    /**
     * The student associated with this request.
     */
    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }
}
