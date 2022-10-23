# Сhats-HTTP-API

## Содержание  
0. [Инструкция по запуску приложения](#0)
1. [UML диаграмма](#1)

____  
<a name="0"></a>
## Инструкция по запуску приложения
____  
<a name="1"></a>
## UML диаграмма отношений сущностей базы данных  
```mermaid

classDiagram  
    class User  
    User : int user_id  
    User : string username  
    User : datetime created_at  
    
    class Chat  
    Chat : int chat_id  
    Chat : string chatname  
    Chat : int users  
    Chat : datetime created_at 
    
    class Message  
    Message : int message_id  
    Message : int chat_id  
    Message : int author_id  
    Message : string text  
    Message : datetime created_at
    
    class Relation  
    Relation : id
    Relation : int chat_id  
    Relation : int author_id
    
    User <--> Relation  
    Chat <--> Relation 
    Message <-- User

```
____
