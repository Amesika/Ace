package com.acehome.entities.task;

public enum TaskStatus {
    A_FAIR(1),
    EN_COUR(2),
    TERMINER(3);

    private int val;

    private TaskStatus(int val) {
        this.val = val;
    }

    public int getValue() {
        return this.val;
    }
}
