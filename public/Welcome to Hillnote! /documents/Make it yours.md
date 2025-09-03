# **==Customising Hillnote for you!==**

## **A quick rundown if you are new to all this.**

AI in Hillnote has 3 parts to it.

1.  **⛺️ Large Language Models (LLMs)** are AI systems trained on lots of text. They can understand and create text like humans, allowing them to answer questions, write creatively, and translate languages accurately. They mimic how we communicate. You can switch between a wide variety of AI systems available at [ollama.com/search](https://ollama.com/search) and [https://huggingface.co/models?library=gguf&sort=trending](https://huggingface.co/models?library=gguf&sort=trending)
    
2.  **🏕️ The Context:** This refers to the information and background the AI uses to best understand your requests and provide relevant answers.
    
3.  **👋🏽 The Prompts** represent the specific instructions and tasks you’ll be giving the LLM.
    

> ***Hillnote uses Ollama****, a tool that simplifies working with large language models. Essentially, Ollama provides a local "sandbox" where you can run various AI models. Hillnote lets you access this sandbox, allowing you to experiment with and use different LLMs directly.*

* * *

## **Configuring your AI**

With Hillnote you can go beyond and configure your editor and the built-in AI to work exactly as you need it. The more you use Hillnote, the better it gets.

You can have multiple models installed in Hillnote and switch between them seamlessly.

### **Add models**

You can add and choose between models in the AI tab. The handpicked tab covers some of my favourite models. You can browse the various sections and hopefully find something you like.

### **Add more models**

Hillnote uses Ollama to run its AI features. Ollama is like a central hub for bringing pre-trained AI models – like Gemma, Phi or Llama – <color:#111827>directly</color> to your computer.

Add models under AI Settings > Custom > Ollama models. Simply type the name as mentioned in [ollama.com/search](https://ollama.com/search).

### **Hugging face models**

[Huggingface.co](http://huggingface.co/) (Hugging Face) is like a central hub for all things Artificial Intelligence, specifically focusing on *language models*. Think of it like a giant toolbox filled with pre-trained AI models – these are essentially really smart computer programs that have already learned a *ton* about language from reading massive amounts of text.

**Here’s what makes it special:**

-   **Pre-trained Models:** They have models that can do amazing things like translate languages, write different kinds of creative content, answer your questions in an informative way, and even summarize text. The cool thing is, you don't have to train these models from scratch – they're ready to go!
    
-   **Hugging Face Hub:** This is their online platform where you can *find* these models, but also share your own! It's like a GitHub for AI models.
    
-   <color:#111827>**GGUF are formats** that allow you to run large language models – like those hosted on Hugging Face –</color> *locally* <color:#111827>on your computer, even if you don't have a super powerful GPU. Think of it like this: Hugging Face provides the</color> *brains* <color:#111827>(the pre-trained model), and GGML/GGUF provides the</color> *body* <color:#111827>– the way to run those brains efficiently.</color>
    

Add models under AI Settings > Custom > Huggingface models. You can run any **GGUF** model you find over at [huggingface.co/models?library=gguf](https://huggingface.co/models?library=gguf) by entering one of the following

-   Paste the full command: `ollama run hf.co/username/repository:quantization`
    
-   Or just the path: `username/repository-name`
    
-   Or full URL: `https://huggingface.co/username/repository`
    

### **Switch models**

Switch between models under AI settings. The active model denotes which model all the queries will be directed to.

### **Temperature**

Temperature helps determine the models creativity. Lower values (0.0) make the output more focused and deterministic, while higher values (2.0) make it more creative and varied.

## **Configuring Context**

> ### ***Embedding models, context files - an explanation and a slight detour.***
> 
> \*If you already know what the title meant then you could possibly skip this entire explanation. If not - this is my best understanding and I hope it helps  
> Context files in Hillnote are saved as a Vector DB managed by something called an "Embedding model".
> 
> In English that translates to all context is stored in a 3d library of sorts - with the exact position of each chunk of text determined by how closely it is related to its neighbours. The entire library ofcourse needs a librarian to manage it. This librarian is a tiny LLM called an embedding model. In Hillnote we use Nomic Embed run via Ollama.\*
> 
> ***Context lifecycle***
> 
> 1.  *When entering the 3d library the embedding model adds all the tags and metadata needed to identify the chunks relationship with the space and positions it accordingly*
>     
> 2.  *When the AI model has a query it searches through the library and find the context fairly easily since it needs to find a relevant location and not search through the entire library to find relevant information. This tends to be better than Keyword searches as well since location could include information by proximity and not necessarily information by exact matches.*
>     
> 
> *Hillnote also refers to the document being written by default but if you use the same context across multiple documents - its probably a good idea to add the information you need as context*
> 
> ### ***A few references that may help!***
> 
> [***www.nomic.ai***](http://www.nomic.ai)
> 
> *A fantastic read from the folks over at* [*Nomic.ai*](http://nomic.ai/) *that helped me understand what context files were and how they work.*

### **Add context**

Add context to a context file by going to context settings and tagging the context with any larger topic it maybe related to.

### **Add context files and switch between them**

When you work on multiple projects having multiple context files to switch between helps draw boundaries in information the AI needs to refer to. You can add a new context file under context management in settings.

You can also switch between the current context with the dropdown at the top bar of any document you have open.

## **Customise your preset prompts**

You can custom prompts to the preset list by doing so under settings within custom prompts. These can be tailored to be specific to you.

<color:#737373>There are a couple of Prompt crafting websites online - do consult with them 🙂</color>

## **Change the system Prompts**

System prompts can be modified within Hillnote settings. This allows you to fundamentally change the Role and the core response structure of the AI model

* * *

## **A quick note on Performance**

**There is no performance hit from having multiple models installed** because only a single model is run at any given

time in Hillnote:

1.  Only one model is loaded into memory at a time
    
2.  Models are stored on disk and only loaded when needed
    
3.  The Ollama server manages memory efficiently by loading only the active model
    
4.  When switching models, the previous model is unloaded before loading the new one
    

**Hillnote’s performance depends on your computer’s RAM, GPU and CPU**. The ideal LLM size you use is directly tied to your machine’s specifications. While we offer helpful indicators, a good starting point is to consider is the below table

| **Model Parameters** | **Minimum RAM** | **Recommended RAM** | **GPU** | **CPU** |
| --- | --- | --- | --- | --- |
| 1B | 4GB | 8GB | 2GB | Most modern CPU's |
| 3B | 4GB | 8GB | 2GB | Most modern CPU's |
| 4B | 8GB | 16GB | 4GB | Most modern CPU's |
| 7B | 8GB | 16GB | 4GB | Most modern CPU's |
| 8B | 16GB | 32GB | 8GB | Most modern CPU's |
| 10B | 24GB | 48GB | 12GB | High end CPU |
| 20B | 48GB | 64GB | 24GB | High end CPU |
| 70B | 128GB | 256GB | 80GB | Server grade CPU |

## **Importing and Exporting templates**

Export template is an option available under Hillnote settings. This exports all of your AI configurations and files you may have saved. This provides a clean template to then share, Import and use across multiple instances of Hillnote. This is especially powerful when you think of templates not just as document structures but an AI context and personality that can be shared and exported.

The following configurations are exported in a template

1.  Documents (structures and templates)
    
2.  All context files with their contexts
    
3.  All custom prompts that have been configured
    

You can import a template under Hillnote settings.