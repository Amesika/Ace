package com.acehome.entities.task;

public enum TaskStatus {
    A_FAIRE(1),
    EN_COURS(2),
    TERMINER(3);

    private int val;

    private TaskStatus(int val) {
        this.val = val;
    }

    public int getValue() {
        return this.val;
    }
}
